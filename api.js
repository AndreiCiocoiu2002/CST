export function fetchAllLessons() {
    return fetch('https://webstore2002-env.eba-yan2epkh.eu-north-1.elasticbeanstalk.com/lessons')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            // Handle the error, e.g., showing an error message to the user
        });
}
export function createOrder(orderData) {
    return fetch('https://webstore2002-env.eba-yan2epkh.eu-north-1.elasticbeanstalk.com/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}
export function updateLessonSpace(lessonId, stockToDecrement) {
    return fetch(`https://webstore2002-env.eba-yan2epkh.eu-north-1.elasticbeanstalk.com/lessons/${lessonId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stockToDecrement }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}
