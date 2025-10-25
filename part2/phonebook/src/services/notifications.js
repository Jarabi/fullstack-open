let timeoutId = null

const createNotifier = (setNotification) => {
    return (text, type = 'success', duration = 5000) => {
        // clear previous timeout
        if (timeoutId) clearTimeout(timeoutId)
        
        setNotification({ type, text, });
        
        timeoutId = setTimeout(() => {
            setNotification({ type: null, text: null, });
            timeoutId = null
        }, duration);
    }
}

export default {createNotifier}