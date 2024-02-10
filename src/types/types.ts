export interface UserData {
  name: string;
  avatarUrl: string;
  login: string;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  repositories: {
    totalCount: number;
    nodes: Repository[];
  };
}

export interface Repository {
  name: string;
  description: string;
  url: string;
  updatedAt: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
  defaultBranchRef: {
    target: {
      history: {
        nodes: {
          committedDate: string;
        }[];
      };
    };
  };
}
