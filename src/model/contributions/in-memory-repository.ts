import { Contribution, ContributionRepository, ContributionStatusEnum } from "./repository";

export class InMemoryContributionRepository implements ContributionRepository {
  private contributions: Contribution[] = [
    {
      id: "1",
      title: "Contribution 1",
      description: "Description 1",
      status: ContributionStatusEnum.OPEN,
      github_link: "https://github.com/onlydustxyz/deathnote-ui",
      gate: 0,
      eligible: true,
      gateMissingCompletedContributions: 0,
      metadata: {
        context: "isolated",
        difficulty: "easy",
        duration: "under a day",
        technology: "cairo",
        type: "feature",
      },
      project: {
        id: "1",
        title: "Project 1",
        description: "Description 1",
        github_link: "https://github.com/onlydustxyz/deathnote-ui",
        openedContributionsAmount: 1,
      },
    },
  ];

  public async list(): Promise<Contribution[]> {
    return this.contributions;
  }

  public async add(contribution: Contribution): Promise<void> {
    this.contributions.push(contribution);
  }
}
