'use strict';

module.exports = {
  // Probabilities for 0-5 table values
  // 0 and 1 aren't probabilities, don't use those
  values: [0.02, 0.2, 0.5, 0.8, 0.94, 0.95],

  // The total number of meetings to analyze
  // 12 is good, that's ~3 months and it is divisible by 2/3/4 meetings per round
  meetings: 12,

  // Quorum size. Meetings not reaching this will be cancelled.
  quorum: 0.5 + 1e-6,

  // The maximum number of meeting slots that could be rotated
  slots: 3,

  // Limits are lower bound coefficients compared to maximum _reachable_ values
  // Everything below that will be ignored while bruteforcing
  limits: {
    participation: 0.6,
    interaction: 0.6
  },
};
