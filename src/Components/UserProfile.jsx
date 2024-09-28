import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch the user data from the API
    const fetchUser = async () => {
      const authToken = localStorage.getItem('authToken'); // Get the token from localStorage

      if (!authToken) {
        console.error('No auth token found');
        return;
      }

      try {
        const response = await fetch('http://localhost:8080/users/username', {
          headers: {
            'Authorization': `Bearer ${authToken}`, // Include the auth token in the header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsername(data.username); // Set the username from the response
        } else {
          console.error('Failed to fetch user data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser(); // Call the function to fetch user data on component mount
  }, []);

  return (
    <div style={styles.container}>
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        style={styles.image}
      />
      <p style={styles.username}>{username || 'Loading...'}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height to center everything
    textAlign: 'center',
  },
  image: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
  username: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default UserProfile;
