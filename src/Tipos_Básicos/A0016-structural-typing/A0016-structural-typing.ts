// Ele só ta preocupado com o conteúdo das interfaces ou do tipo e não com o nome do tipo
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'rodrigo', password: '123456' };
const sentUser = { username: 'rodrigo', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
