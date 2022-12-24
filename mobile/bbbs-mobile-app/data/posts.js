import USERS from './users';

const POSTS = [{
        image: require('./../assets/images/post4.jpeg'),
        user: USERS[0].user,
        Location: "Sao Paulo",
         postDate: "2 day ago",
        likes: 800,
        caption: "Aqui esta a descricao do post",
        profile_picture: USERS[0].image,
        comments: [{
                user: "BeneTesla",
                comment: "Isso e um comentarios",
            },
            {
                user: "pedro",
                comment: "YO.",
            },
        ],

    },
    {
        image: require('./../assets/images/post5.jpeg'),
        user: USERS[1].user,
         postDate: "30 day ago",
        likes: 800,
        caption: "Aqui esta a descricao do post",
        profile_picture: USERS[1].image,
        comments: [{
                user: "BeneTesla",
                comment: "Isso e um comentarios",
            },
            {
                user: "pedro",
                comment: "YO.",
            },
        ],

    },
    {
        image: require('./../assets/images/post6.jpeg'),
        user: USERS[2].user,
        likes: 800,
        postDate: "15 day ago",
        caption: "Aqui esta a descricao do post",
        profile_picture: USERS[2].image,
        comments: [{
                user: "BeneTesla",
                comment: "Isso e um comentarios",
            },
            {
                user: "pedro",
                comment: "YO.",
            },
        ],

    },
    {
        image: require('./../assets/images/post7.jpeg'),
        user: USERS[4].user,
        likes: 1800,
         postDate: "5 day ago",
        caption: "Aqui esta a descricao do post",
        profile_picture: USERS[4].image,
        comments: [{
                user: "BeneTesla",
                comment: "Isso e um comentarios",
            },
            {
                user: "pedro",
                comment: "YO.",
            },
        ],

    },
    {
        image: require('./../assets/images/post8.jpeg'),
        user: USERS[5].user,
        likes: 800,
         postDate: "JusNow",
        caption: "Aqui esta a descricao do post",
        profile_picture: USERS[5].image,
        comments: [{
                user: "BeneTesla",
                comment: "Isso e um comentarios",
            },
            {
                user: "pedro",
                comment: "YO.",
            },
        ],
    }
    
]
export default POSTS;