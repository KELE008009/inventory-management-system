export class Register {
    registerUser(username: string, password: string, email: string): Promise<any> {
        // Logic for user registration
        return new Promise((resolve, reject) => {
            // Simulate API call
            setTimeout(() => {
                if (username && password && email) {
                    resolve({ success: true, message: 'User registered successfully' });
                } else {
                    reject({ success: false, message: 'Registration failed' });
                }
            }, 1000);
        });
    }
}