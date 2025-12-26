document.addEventListener('DOMContentLoaded', () => {
    const terminalContent = document.getElementById('terminalContent');
    const terminalContainer = document.getElementById('terminalContainer');
    const welcomeScreen = document.getElementById('welcomeScreen');
    
    let lineIndex = 0;
    
    const lines = [
        { text: '', delay: 500 },
        { text: 'Connecting to NS!! Records...', delay: 800 },
        { text: 'Connection established.', delay: 600 },
        { text: '', delay: 400 },
        { text: 'LOGIN: ', delay: 300, input: true, value: 'visitor' },
        { text: '', delay: 400 },
        { text: 'PASSWORD: ', delay: 300, input: true, value: '********', isPassword: true },
        { text: '', delay: 800 },
        { text: 'Authenticating...', delay: 1000 },
        { text: 'Access granted.', delay: 600 },
        { text: '', delay: 400 },
        { text: 'Loading NS!! interface...', delay: 800 },
        { text: 'Welcome to NS!! Records.', delay: 1000 }
    ];
    
    function typeText(element, text, speed, callback) {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                if (callback) callback();
            }
        }, speed);
    }
    
    function addLine(line, callback) {
        const p = document.createElement('p');
        p.className = 'terminal-line';
        
        if (line.input) {
            p.innerHTML = line.text;
            terminalContent.appendChild(p);
            
            const inputSpan = document.createElement('span');
            inputSpan.className = line.isPassword ? 'terminal-input password' : 'terminal-input';
            p.appendChild(inputSpan);
            
            setTimeout(() => {
                typeText(inputSpan, line.value, 80, callback);
            }, 200);
        } else {
            terminalContent.appendChild(p);
            if (line.text) {
                typeText(p, line.text, 30, callback);
            } else {
                setTimeout(callback, 100);
            }
        }
        
        terminalContent.parentElement.scrollTo({
            top: terminalContent.scrollHeight,
            behavior: 'smooth'
        });
    }
    
    function processNextLine() {
        if (lineIndex < lines.length) {
            const line = lines[lineIndex];
            lineIndex++;
            
            addLine(line, () => {
                setTimeout(processNextLine, line.delay);
            });
        } else {
            setTimeout(() => {
                terminalContainer.style.opacity = '0';
                setTimeout(() => {
                    terminalContainer.style.display = 'none';
                    welcomeScreen.style.display = 'flex';
                    setTimeout(() => {
                        welcomeScreen.style.opacity = '1';
                    }, 50);
                }, 500);
            }, 1000);
        }
    }
    
    setTimeout(processNextLine, 1000);
});
