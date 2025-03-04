import { PrismaClient, Prisma } from "@prisma/client";
import { Main } from "next/document";

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] =[
    {
        name: "آزاده شریفی سلطانی",
        username: "frau_azadeh",
        email: "designweb.azadeh@gmail.com",
        password:"frau@zadeh",
    },
];  

export async function main() {
    for(const user of users){
        await prisma.user.create({data: user});
    }
}

main().then(()=> console.log("Done!"));