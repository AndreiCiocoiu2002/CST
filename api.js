// api.js
export function fetchAllLessons() {
    return fetch('http://webstore2002-env.eba-yan2epkh.eu-north-1.elasticbeanstalk.com/')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

export function createOrder(orderData) {
    return fetch('http://webstore2002-env.eba-yan2epkh.eu-north-1.elasticbeanstalk.com/', {
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

// api.js
export function updateLessonSpace(lessonId, stockToDecrement) {
    return fetch(`http://webstore2002-env.eba-yan2epkh.eu-north-1.elasticbeanstalk.com/lessons${lessonId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stockToDecrement }),
    });
}