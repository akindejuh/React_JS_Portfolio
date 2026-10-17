// Snapshot of my GitHub record for the site: `npm run github` (needs the gh CLI, logged in).
// GitHub only serves contribution counts to authenticated requests, so a static site
// can't fetch them live; refresh this before a deploy instead.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { stdout } from 'node:process';
import { URL } from 'node:url';

const LOGIN = 'akindejuh';
const FIRST_YEAR = 2022;

const gql = (query) => JSON.parse(execFileSync('gh', ['api', 'graphql', '-f', `query=${query}`], { encoding: 'utf8' })).data.user;

const now = new Date();
const years = [];
for (let y = FIRST_YEAR; y <= now.getFullYear(); y++) {
  const c = gql(
    `query{user(login:"${LOGIN}"){contributionsCollection(from:"${y}-01-01T00:00:00Z",to:"${y}-12-31T23:59:59Z"){contributionCalendar{totalContributions}}}}`,
  ).contributionsCollection;
  years.push({ year: y, total: c.contributionCalendar.totalContributions });
}

// the last 12 months, as GitHub draws them: one column per week
const cal = gql(
  `query{user(login:"${LOGIN}"){repositories(ownerAffiliations:OWNER){totalCount} contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{contributionLevel}}}}}}`,
);
const LEVEL = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
const weeks = cal.contributionsCollection.contributionCalendar.weeks.map((w) => w.contributionDays.map((d) => LEVEL[d.contributionLevel]));

const out = {
  updated: now.toISOString().slice(0, 10),
  total: years.reduce((n, y) => n + y.total, 0),
  lastYear: cal.contributionsCollection.contributionCalendar.totalContributions,
  repos: cal.repositories.totalCount,
  years,
  weeks,
};
writeFileSync(new URL('../src/data/github.json', import.meta.url), JSON.stringify(out) + '\n');
stdout.write(`github.json: ${out.total} contributions since ${FIRST_YEAR}, ${out.lastYear} in the last year, ${weeks.length} weeks\n`);
