const url = `https://api.github.com/users`;

exports.getUsers = async (req, res) => {
  const since = req.query.since == undefined ? '' : `since=${req.query.since}&`;
  const perPages = req.query.per_page;

  const api = await fetch(`${url}?${since}per_page=${perPages}`);

  if (api.ok) {
    const data = [await api.json()];

    try {
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
};

exports.getUserDetails = async (req, res) => {
  const login = req.params.login;

  const api = await fetch(`${url}/${login}`);

  if (api.ok) {
    const data = await api.json();

    try {
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
};

exports.getUserRepos = async (req, res) => {
  const login = req.params.login;

  const api = await fetch(`${url}/${login}/repos`);

  if (api.ok) {
    const data = await api.json();

    try {
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
};
