import { auth, provider } from "../../firebase";

export const signInWithGoogle = async () => {
    let user;
    await auth.signInWithPopup(provider).then((res) => {
        console.log(res.user);
        user = res.user
    })
    .catch((error) => {
        console.log(error.message);
    });

    return user;
};

// export const signInWithFacebook = async () => {
//     let user;
//     await auth.signInWithPopup(Fprovider).then((res) => {
//         console.log(res.user);
//         user = res.user
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

//     return user;
// };

// export const signInWithTwitter = async () => {
//     let user;
//     await auth.signInWithPopup(Tprovider).then((res) => {
//         console.log(res.user);
//         user = res.user
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

//     return user;
// };

// export const signInWithGithub = async () => {
//     let user;
//     await auth.signInWithPopup(Hprovider).then((res) => {
//         console.log(res.user);
//         user = res.user
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

//     return user;
// };