interface FirebaseError {
    message: string;
    status: string;
  }
  
export const extractFirebaseError = (text: string): FirebaseError | null => {
  const regex = /HTTP error \d{3}: (\{.*\})\)\)/;
  const match = text.match(regex);
  
  if (!match || !match[1]) {
    return null;
  }
  
  const errorObject = JSON.parse(match[1]);
    
  return {
    message: errorObject.error.message,
    status: errorObject.error.status
  };
}