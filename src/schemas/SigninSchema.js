import zod from "zod";

export const signinSchema = zod.object({
    email: zod.string().nonempty("O email é obrigatório").email().toLowerCase(),
    password: zod.string().min(6, "A senha precisa ter no minimo 6 caractreres"),
});
