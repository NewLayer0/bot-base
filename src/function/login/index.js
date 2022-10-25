import UtilSon from '../../class/utilClasses.js';

export default function connection() {

    let { client, token } = new UtilSon();

    client.login(token);
    client.once("ready", () => console.info(client.user.username,"Pronto!"));

}