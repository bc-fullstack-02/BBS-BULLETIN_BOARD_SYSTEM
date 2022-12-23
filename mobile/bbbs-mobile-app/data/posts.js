import USERS from './users';

const POSTS = [{
        image: require('./../assets/images/post4.jpeg'),
        user: USERS[0].user,
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
]
export default POSTS;