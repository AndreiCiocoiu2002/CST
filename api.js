export function fetchAllLessons() {
    return fetch('https://webstore2002-env.eba-yan2epkh.eu-north-1.elasticbeanstalk.com/')
        .then(response => {
            if (!response.ok) {
                // If the response is not OK, try to read it as text to get more information
                return response.text().then(text => {
                    throw new Error(`HTTP error! Status: ${response.status}, Body: ${text}`);
                });
            }
            // Check the Content-Type to ensure the response is actually JSON
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError("Received a non-JSON response from the server");
            }
            return response.json();
        });
}

export function createOrder(orderData) {
    return fetch('https://webstore2002-env.eba-yan2epkh.eu-north-1.elasticbeanstalk.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    });
}

export function updateLessonSpace(lessonId, stockToDecrement) {
    return fetch(`https://webstore2002-env.eba-yan2epkh.eu-north-1.elasticbeanstalk.com/lessons/${lessonId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stockToDecrement }),
    });
}
