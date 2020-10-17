import { User, Auth } from '../services';
import * as rootResolverHelper from '../../helpers/tier2/rootResolver'
import { typeDefs } from '../typeDefs';

const resolvers = {
  query: {
    getCurrentUser: {
      method: "get",
      route: "/currentUser",
      type: User.__typename,
      resolver: (req) => User.getRecord(req, {
        ...req.params,
        ...req.jql?.__args,
        id: req.user?.id
      }, req.jql)
    },
  },
  mutation: {
    registerUser: {
      method: "post",
      route: "/registerUser",
      type: Auth.__typename,
      resolver: (req) => User.registerUser(req, {
        ...req.params,
        ...req.jql?.__args,
      }, req.jql)
    },
  },
  subscription: {}
};

rootResolverHelper.generateRootResolvers(resolvers, User, typeDefs, {
  methods: ["get", "getMultiple", "delete", "update"]
});

export default resolvers;