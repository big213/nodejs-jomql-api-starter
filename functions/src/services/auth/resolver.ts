import { Auth } from '../services';

export default {
  query: {
  },
  mutation: {
    loginUser: {
      method: "post",
      route: "loginUser",
      type: Auth.__typename,
      resolver: (req) => Auth.loginUser(req, {
        ...req.params,
        ...req.jql?.__args,
      }, req.jql)
    },
  },
  subscription: {}
};