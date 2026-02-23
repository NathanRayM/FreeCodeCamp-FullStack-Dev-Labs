const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

// TimeAgo Function to calculate minutes, hours, and days
function timeAgo(timeStamp) {
  const difference = Date.now() - new Date(timeStamp).getTime();
  const minutes = Math.floor(difference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
}

// View count function
function viewCount(numViews) {
  if (numViews >= 1000) {
    let views = Math.floor(numViews / 1000);
    return `${views}k`;
  } else {
    return numViews;
  }
}

// Creating anchor elements for category info based in id's
function forumCategory(id) {
  if (allCategories[id]) {
    let key = allCategories[id];
    return `<a class="category ${key.className}" href="${forumCategoryUrl}${key.className}/${id}">${key.category}</a>`;
  } else {
    return `<a class="category general" href="https://forum.freecodecamp.org/c/general/${id}">General</a>`;
  }
}

// function for the img element for users
function avatars(posters, users) {
  let imgTags = [];
  posters.forEach((poster) => {
    let posterId = poster.user_id;
    let matchingUser = users.find((user) => user.id === posterId);
    let src = matchingUser.avatar_template.replace("{size}", "30");

    if (src.startsWith("/")) {
      src = `${avatarUrl}${src}`;
    }

    let imgString = `<img src="${src}" alt="${matchingUser.name}">`;
    imgTags.push(imgString);
  });
  return imgTags.join("");
}

// function to show latest posts
function showLatestPosts(data) {
  let users = data.users;
  let topicList = data.topic_list;
  let topics = topicList.topics;

  let rows = topics
    .map((topic) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = topic;

      return `<tr>
  <td>
  <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
  ${forumCategory(category_id)}
  </td>
  <td><div class="avatar-container">${avatars(posters, users)}</div></td>
  <td>${posts_count - 1}</td>
  <td>${viewCount(views)}</td>
  <td>${timeAgo(bumped_at)}</td>
  </tr>`;
    })
    .join("");
  document.getElementById("posts-container").innerHTML = rows;
}

// fetching the actual json data
async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
