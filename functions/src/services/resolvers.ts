import User from "./user/resolver";
import Company from "./company/resolver";
import Auth from "./auth/resolver";

const rootResolvers = [User, Company, Auth];

const resolvers = {
  query: {},
  mutation: {},
  subscription: {},
};

function mergeResolvers(resolversArray: any) {
  for (const resolver of resolversArray) {
    for (const prop in resolver) {
      for (const operation in resolver[prop]) {
        resolvers[prop][operation] = resolver[prop][operation];
      }
    }
  }
}

mergeResolvers(rootResolvers);

export default resolvers;
