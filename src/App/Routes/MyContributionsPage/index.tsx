import { FC } from "react";
import { useRecoilValue } from "recoil";
import Button from "src/components/Button";
import ContributionList from "src/components/ContributionList";
import { myCompletedContributionsQuery, myOngoingContributionsQuery } from "src/state";

const MyContributionsPage: FC = () => {
  const ongoingContributions = useRecoilValue(myOngoingContributionsQuery);
  const completedContributions = useRecoilValue(myCompletedContributionsQuery);

  const allMyContributions = [...ongoingContributions, ...completedContributions];

  if (allMyContributions.length === 0) {
    return (
      <div className="mt-32 flex flex-col items-center">
        <div className="text-3xl text-light-blue/50">You don't have contributions yet</div>
        <Button className="mt-8" href="/">
          Start contributing
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="mt-10 text-3xl font-alfreda">My contributions</h1>

      <ContributionList className="mt-16" contributions={allMyContributions} />
    </div>
  );
};

export default MyContributionsPage;