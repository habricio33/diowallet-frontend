import zod from "zod";

export const signupSchema = zod.object({
  name: zod
    .string()
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
    .nonempty("O nome é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ");
    }),
    email: zod
        .string()
        .nonempty("O email é obrigatório")
        .email("Email inválido")
        .transform((email) => email.toLowerCase()),
    password: zod
        .string()
        .min(6, "A senha precisa ter no mínimo 6 caracteres"),
    confirmPassword: zod
        .string()
        .min(6, "A senha precisa ter no mínimo 6 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
}); 