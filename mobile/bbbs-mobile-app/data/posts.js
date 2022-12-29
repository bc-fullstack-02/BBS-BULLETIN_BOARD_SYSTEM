import USERS from './users';

const POSTS = [{
        image: require('./../assets/images/post9.jpg'),
        user: USERS[0].user,
        Location: "Sao Paulo",
        postDate: "2 day ago",
        likes: 1800,
        caption: "YOHOHOHOHO.",
        profile_picture: USERS[0].image,
        comments: [{
                user: "Bene",
                comment: "Minha pica flamejante desgraca",
            },
            {
                user: "Brook",
                comment: "YOHOHOHOHO.",
            },
        ],
    },
    {
        image: require('./../assets/images/post10.jpg'),
        user: USERS[1].user,
        Location: "Sao Paulo",
        postDate: "2 day ago",
        likes: 2500,
        caption: "Aqui esta a descricao do post",
        profile_picture: USERS[1].image,
        comments: [{
            user : "BeneTesla",
            comment: "Money Desgraca",
        }, ],
    },
    {
        image: require('./../assets/images/post11.jpg'),
        user: USERS[2].user,
        Location: "Sao Paulo",
        postDate: "2 day ago",
        likes: 8100,
        caption: "O Zoro sola",
        profile_picture: USERS[2].image,
        comments: [{
                user : "Sanji :",
                comment: "Beba mais um pouco de sake,Marimo",
            },
            {
                user : "Zoro :",
                comment: "Sanji, voce nao sabe o que e beber...",
            },
        ],
    },
    {
        image: require('./../assets/images/carne.png'),
        user: USERS[3].user,
        Location: "Sao Paulo",
        postDate: "2 day ago",
        likes: 800,
        caption: "Aqui esta a descricao do post",
        profile_picture: USERS[3].image,
        comments: [{
            user : "Nami :",
            comment: "Voce gastou nosso dinheiro com isso?",
        }, ],
    }, 
    {
        image: require('./../assets/images/women.jpg'),
        user: USERS[4].user,
        Location: "Sao Paulo",
        postDate: "2 day ago",
        likes: 800,
        caption: "NAMI_SAAAN",
        profile_picture: USERS[4].image,
        comments: [{
            user: "Zoro",
            comment: "gado😂",
        }, ],
    }     

]
export default POSTS;