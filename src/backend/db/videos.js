import { v4 as uuid } from "uuid";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "The Fastest Way To Load JavaScript",
    thumbnail: "https://i3.ytimg.com/vi/BMuFBYw91UQ/maxresdefault.jpg",
    videoLength: "10:20",
    creator: "Web Dev Simplified",
    categoryName: "Programming",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Awesome Video about Coding",
    thumbnail: "https://i3.ytimg.com/vi/6tZz6gr1h9E/maxresdefault.jpg",
    videoLength: "6:58",
    link: "https://www.youtube.com/watch?v=6tZz6gr1h9E&t=2s",
    creator: "Soham Shah",
    categoryName: "Programming",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },

  {
    _id: uuid(),
    title: "Awesome Video about Coding",
    thumbnail: "https://i3.ytimg.com/vi/Dv7gLpW91DM/maxresdefault.jpg",
    videoLength: "5:43",
    link: "https://www.youtube.com/watch?v=Dv7gLpW91DM",
    creator: "Soham Shah",
    categoryName: "Programming",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Zero to Full-Time Programmer in 5 Steps",
    thumbnail: "https://i3.ytimg.com/vi/s9iPo9YMU70/maxresdefault.jpg",
    videoLength: "8:32",
    link: "https://www.youtube.com/watch?v=s9iPo9YMU70",
    creator: "Kenny Gunderman",
    categoryName: "Programming",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "How To Learn Programming for BEGINNERS! (2019/2020)",
    thumbnail: "https://i3.ytimg.com/vi/bJzb-RuUcMU/maxresdefault.jpg",
    videoLength: "4:45",
    creator: "CroatCode",
    categoryName: "Programming",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Waxing - Stand Up Comedy",
    thumbnail: "https://i3.ytimg.com/vi/z12bz7adLKI/maxresdefault.jpg",
    videoLength: "8:21",
    link: "https://www.youtube.com/watch?v=z12bz7adLKI",
    creator: "Anubhav Singh Bassi",
    categoryName: "Comedy",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "PUBG With Pariwar | Harsh Beniwal",
    thumbnail: "https://i3.ytimg.com/vi/-vqo9V0qxLE/maxresdefault.jpg",
    videoLength: "22:01",
    link: "https://www.youtube.com/watch?v=-vqo9V0qxLE",
    creator: "Harsh Beniwal",
    categoryName: "Comedy",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Nora क्यों नहीं है Petrol Pump में Allowed?",
    thumbnail: "https://i3.ytimg.com/vi/UCzb1bgLpsE/maxresdefault.jpg",
    videoLength: "9:35",
    link: "https://www.youtube.com/watch?v=UCzb1bgLpsE",
    creator: "SET India",
    categoryName: "Comedy",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Paan | Stand-up Comedy by Aakash Gupta",
    thumbnail: "https://i3.ytimg.com/vi/6d2wzfx4sRs/maxresdefault.jpg",
    videoLength: "10:00",
    link: "https://www.youtube.com/watch?v=6d2wzfx4sRs",
    creator: "Aakash Gupta",
    categoryName: "Comedy",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Differences Between Var, Let, and Const",
    thumbnail: "https://i3.ytimg.com/vi/9WIJQDvt4Us/maxresdefault.jpg",
    videoLength: "8:36",
    link: "https://www.youtube.com/watch?v=9WIJQDvt4Us",
    creator: "Web Dev Simplified",
    categoryName: "Programming",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Kalandar | Munawar x Farhan Khan",
    thumbnail: "https://i3.ytimg.com/vi/7KxQ6ZaOZ0g/maxresdefault.jpg",
    videoLength: "4:20",
    link: "https://www.youtube.com/watch?v=7KxQ6ZaOZ0g",
    creator: "Munawar Faruqui",
    categoryName: "Rap",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "LOSER Ft. Dino James | Being Indian ",
    thumbnail: "https://i3.ytimg.com/vi/I63RkFdgjos/maxresdefault.jpg",
    videoLength: "4:25",
    link: "https://www.youtube.com/watch?v=I63RkFdgjos",
    creator: "BeingIndia",
    categoryName: "Rap",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Jawab | Munawar x Spectra | Prod by Shawie | ",
    thumbnail: "https://i3.ytimg.com/vi/ziFS1ATzuiY/maxresdefault.jpg",
    videoLength: "5:04",
    link: "https://www.youtube.com/watch?v=ziFS1ATzuiY",
    creator: "Munawar Faruqui",
    categoryName: "Rap",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },

  {
    _id: uuid(),
    title: "Raftaar x Sonu Kakkar x Muhfaad - Sare Karo Dab ",
    thumbnail: "https://i3.ytimg.com/vi/zIPTP3TKUSg/maxresdefault.jpg",
    videoLength: "3:56",
    link: "https://www.youtube.com/watch?v=ziFS1ATzuiY",
    creator: "Zee Music Company",
    categoryName: "Rap",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "IT WILL GIVE YOU GOOSEBUMPS - Elon Musk",
    thumbnail: "https://i3.ytimg.com/vi/t1XCzWlYWeA/maxresdefault.jpg",
    videoLength: "6:32",
    link: "https://www.youtube.com/watch?v=t1XCzWlYWeA",
    creator: "Mindset Mentor",
    categoryName: "Motivation",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "NO EXCUSES - Best Motivational Video",
    thumbnail: "https://i3.ytimg.com/vi/wnHW6o8WMas/maxresdefault.jpg",
    videoLength: "3:20",
    link: "https://www.youtube.com/watch?v=wnHW6o8WMas",
    creator: "Ben Lionel Scott",
    categoryName: "Motivation",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Never Give Up Motivation Speech by Elon Musk",
    thumbnail: "https://i3.ytimg.com/vi/u6NlyoRoAzA/maxresdefault.jpg",
    videoLength: "2:45",
    link: "https://www.youtube.com/watch?v=ziFS1ATzuiY",
    creator: "Motivation Hunt",
    categoryName: "Motivation",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Work Like Me, To Become The Best - Cristiano Ronaldo",
    thumbnail: "https://i3.ytimg.com/vi/iYoXFg5D4NU/maxresdefault.jpg",
    videoLength: "3:14",
    link: "https://www.youtube.com/watch?v=iYoXFg5D4NU",
    creator: "EntreXpreneur",
    categoryName: "Motivation",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Raftaar x Sonu Kakkar x Muhfaad - Sare Karo Dab ",
    thumbnail: "https://i3.ytimg.com/vi/zIPTP3TKUSg/maxresdefault.jpg",
    videoLength: "3:56",
    link: "https://www.youtube.com/watch?v=ziFS1ATzuiY",
    creator: "Zee Music Company",
    categoryName: "Rap",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },

  {
    _id: uuid(),
    title: "Sab Theek Ho Jayega | Akash Singh ",
    thumbnail: "https://i3.ytimg.com/vi/B8iGZvEUKKw/maxresdefault.jpg",
    videoLength: "5:02",
    link: "https://www.youtube.com/watch?v=B8iGZvEUKKw",
    creator: "The Social House",
    categoryName: "Poetry",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];
