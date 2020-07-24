import { Context } from "koa";
import * as userDal from "./userDal";
import { IUser } from "./userEntity";

export async function getUser(ctx: Context): Promise<void> {
    // load user by id
    const user: IUser = await userDal.findByName((ctx as any).params.id);

    if (user) {
        // return OK status code and loaded user object
        ctx.status = 200;
        ctx.body = user;
    } else {
        // return a BAD REQUEST status code and error message
        ctx.status = 400;
        ctx.body = "The user you are trying to retrieve doesn't exist in the db";
    }

}

export async function addUser(ctx:Context):Promise<void> {
    const name = ctx.request.body.name;

    if (await userDal.findByName(name)) {
        // return BAD REQUEST status code and email already exists error
        ctx.status = 400;
        ctx.body = "The specified name already exists";
    } else {
        // save the user contained in the POST body
        const user = await userDal.add(name);
        // return CREATED status code and updated user
        ctx.status = 201;
        ctx.body = user;
    }
}
