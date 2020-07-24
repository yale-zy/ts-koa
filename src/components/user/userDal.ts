import User,{IUser} from "./userEntity";

export async function findByName(name:string):Promise<IUser> {
    const user = await User.findOne({name});
    return user;
}

export async function add(name:string):Promise<IUser> {
    const user = await User.create({name});
    return user;
}