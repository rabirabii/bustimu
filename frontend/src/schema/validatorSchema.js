import * as yup from "yup";

const bannedWords = [
  "ngentot",
  "Ngentot",
  "anjing",
  "bangsat",
  "kontol",
  "biji peler",
  "peler",
  "memek",
  "monyet",
  "babi",
  "bego",
  "goblok",
  "tolol",
  "nenen",
  "tete",
  "pki",
  "komunis",
  "katakasar",
];
export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is Required")
    .test("email-format", "Invalid  format", function (value) {
      // Regular expression to match the email pattern
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      // Check if the email matches the pattern
      return emailRegex.test(value || "");
    }),
  name: yup
    .string()
    .required("Name is Required")
    .trim()
    .notOneOf(bannedWords, "Name contains inappropriate words")
    .min(4, "Name must be at least 4 characters long")
    .max(16, "Name max length is 16 characters long "),

  password: yup
    .string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must be max 16 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Confirm Password is Required"),
});

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .test("email format", "invalid Format", function (value) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

      return emailRegex.test(value || "");
    })
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
