export const signUpWithGoogle = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("Simulated Google sign-in");
        resolve({ user: "Fake Google User" });
      } else {
        reject(new Error("Google sign-in failed"));
      }
    }, 1000);
  });
};

 export const signUpWithFacebook = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("Simulated Facebook sign-in");
        resolve({ user: "Fake Facebook User" });
      } else {
        reject(new Error("Facebook sign-in failed"));
      }
    }, 1000);
  });
 };

