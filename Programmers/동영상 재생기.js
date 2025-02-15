function solution(video_len, pos, op_start, op_end, commands) {
    let current_time = timeToSecond(pos);
    const opening_start = timeToSecond(op_start);
    const opening_end = timeToSecond(op_end);
    const video_length = timeToSecond(video_len);
    
    if(current_time >= opening_start && current_time <= opening_end) {
        current_time = opening_end;
    }
    
    for(let i = 0; i < commands.length; i++) {
        if(commands[i] === 'prev') {
            current_time = prev(current_time);
        } else if (commands[i] === 'next') {
            current_time = next(current_time, video_length);
        }
        if(current_time >= opening_start && current_time <= opening_end) {
            current_time = opening_end;
        }
    }
    
    return secondToTime(current_time);
}

function secondToTime(seconds) {
    const mm = String(Math.floor(seconds / 60)).padStart(2,"0");
    const ss = String(seconds % 60).padStart(2,"0");
    
    return mm + ':' + ss;
}

function timeToSecond(time) {
    const [mm, ss] = time.split(':').map(Number);
    return mm * 60 + ss;
}

function prev(current_time) {
    const result = current_time - 10;
    return result < 0 ? 0 : result; 
}

function next(current_time, video_length) {
    const result = current_time + 10;
    return result > video_length ? video_length : result; 
}