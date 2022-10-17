import { ContributorAccountAddress } from "../contact-information/repository";
import { ContributorDto, ContributorRepository, RegisterGithubAccount } from "./repository";

export class InMemoryContributorRepository implements ContributorRepository {
  private contributors: ContributorDto[] = [
    {
      id: "0x123456789" as ContributorAccountAddress,
      github_identifier: "github-id",
      github_username: "github-username",
      account: "0x123456789" as ContributorAccountAddress,
    },
    {
      id: "0x123456789abcdef" as ContributorAccountAddress,
      github_identifier: "github-id",
      github_username: "github-username",
      account: "0x123456789abcdef" as ContributorAccountAddress,
    },
    {
      id: "0x12340241B3e9559bF8786c236128525A2CC36a2c04F0115Ff902c63Df712cdef" as ContributorAccountAddress,
      github_identifier: "github-id",
      github_username: "github-username",
      account: "0x12340241B3e9559bF8786c236128525A2CC36a2c04F0115Ff902c63Df712cdef" as ContributorAccountAddress,
    },
    {
      id: "0x0abcdefabcdef" as ContributorAccountAddress,
      github_identifier: "github-id",
      github_username: "github-username",
      account: "0x0abcdefabcdef" as ContributorAccountAddress,
    },
    {
      id: "0x012c0407D341F351E000b894c3a0d226Bc971caEd123eF1abb9388f6AA02AED0" as ContributorAccountAddress,
      github_identifier: "github-id",
      github_username: "github-username",
      account: "0x012c0407D341F351E000b894c3a0d226Bc971caEd123eF1abb9388f6AA02AED0" as ContributorAccountAddress,
    },
  ];

  /**
   * This private property is used to create new contributors using `registerGithubAccount`
   * With it we can define by advance the github information we want to add to the list of contributors
   */
  private futureContributors: ContributorDto[] = [
    {
      id: "0xa2fd97f6ea0914b540a8c5e24dbbc5a45245d885e354a916c53553cdb093e2" as ContributorAccountAddress,
      account: "0xa2fd97f6ea0914b540a8c5e24dbbc5a45245d885e354a916c53553cdb093e2" as ContributorAccountAddress,
      github_identifier: "new-github-user-id",
      github_username: "new-github-user-name",
    },
  ];

  public async findByAccountAddress(address: ContributorAccountAddress): Promise<ContributorDto> {
    const contributor = this.contributors.find(
      fetchedContributor => parseInt(fetchedContributor.account, 16) === parseInt(address, 16)
    );

    if (!contributor) {
      throw new Error("Failed to fetch contributor " + address);
    }

    return contributor;
  }

  public async registerGithubAccount({ address }: RegisterGithubAccount): Promise<void> {
    const newContributor = this.futureContributors.find(contributor => contributor.account === address);

    if (newContributor === undefined) {
      throw new Error(`Can't find a future contributor for address ${address}`);
    }

    this.contributors.push(newContributor);
  }
}
