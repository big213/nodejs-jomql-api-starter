import { Company } from "../services";
import * as rootResolverHelper from "../../helpers/tier2/rootResolver";
import { typeDefs } from "../typeDefs";

const resolvers = {
  query: {},
  mutation: {},
  subscription: {},
};

rootResolverHelper.generateRootResolvers(resolvers, Company, typeDefs, {
  methods: ["get", "getMultiple", "delete", "create", "update"],
});

export default resolvers;
