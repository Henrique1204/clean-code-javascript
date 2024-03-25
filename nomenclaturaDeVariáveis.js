const users = ["Diego", "Mayk", "Rodrigo"];

// 1 - Exemplo ruim.
const filtered = users.filter((u) => u.startsWith("D"));

// 2 - Exemplo bom.
const usersStrartingWithLetterD = users.filter((user) => {
  const FIRST_CASE = "D";

  return user.startsWith(FIRST_CASE);
});

// -----------

// Evite nomes genéricos (data, response, list, args, params).
// Exercício

const userCategoryList = [
  {
    name: "User",
    minimumNumberOfFollwers: 5,
  },
  {
    name: "Friendly",
    minimumNumberOfFollwers: 50,
  },
  {
    name: "Famous",
    minimumNumberOfFollwers: 500,
  },
  {
    name: "Super Star",
    minimumNumberOfFollwers: 1000,
  },
];

export default async function getGithubUserWithCategory(req, res) {
  const githubUsername = String(req.query.username);

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const githubUserResponse = await fetch(
    `https://api.github.com/users/${githubUsername}`
  );

  if (githubUserResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${github}" not found`,
    });
  }

  const githubUser = await githubUserResponse.json();

  const userCategoryListSortedAscending = userCategoryList.sort(
    (firstCategory, secondCategory) => {
      return (
        secondCategory.minimumNumberOfFollwers -
        firstCategory.minimumNumberOfFollwers
      );
    }
  );

  const userCategory = userCategoryListSortedAscending.find(
    (category) => githubUser.followers > category.minimumNumberOfFollwers
  );

  const githubUserWithCategory = {
    githubUsername,
    category: userCategory.name,
  };

  return githubUserWithCategory;
}

getGithubUserWithCategory(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
