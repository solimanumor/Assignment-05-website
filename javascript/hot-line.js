

  // INITIAL STATE

  let heartCount = 0;
  let coins = 100;
  let copyCount = 0;

  // Navbar elements
  const heartCounter = document.querySelector('.navbar-right-elements .icon-text');
  const coinCounter = document.querySelectorAll('.navbar-right-elements .icon-text')[1];
  const copyCounter = document.querySelector('.copy-counter p');

  // Call history elements
  const callHistoryContainer = document.querySelector('#call-history .history-list');
  const clearHistoryBtn = document.querySelector('#call-history .btn-clear');

  
  // HEART ICON FUNCTIONALITY
 
  document.addEventListener('click', (event) => {
    const heartBtn = event.target.closest('.services-icon i.fa-heart');
    if (!heartBtn) return;

    heartCount++;
    heartCounter.textContent = heartCount;
    heartBtn.classList.add('liked'); // optional styling
  });

  // COPY BUTTON FUNCTIONALITY

  document.addEventListener('click', async (event) => {
    const copyBtn = event.target.closest('.copy-btn');
    if (!copyBtn) return;

    const card = copyBtn.closest('.emergency-service');
    if (!card) return;

    const textToCopyEl = card.querySelector('.services-num');
    if (!textToCopyEl) return;

    const textToCopy = textToCopyEl.textContent.trim();

    try {
      await navigator.clipboard.writeText(textToCopy);
      alert(`Copied: ${textToCopy}`);
      copyCount++;
      copyCounter.textContent = copyCount;
    } catch (err) {
      console.error('Copy failed', err);
    }
  });


  // CALL BUTTON FUNCTIONALITY
 
  document.addEventListener('click', (event) => {
    const callBtn = event.target.closest('.call-btn');
    if (!callBtn) return;

    const card = callBtn.closest('.emergency-service');
    if (!card) return;

    const serviceName = card.querySelector('.service-name')?.textContent.trim();
    const serviceNumber = card.querySelector('.services-num')?.textContent.trim();

    if (!serviceName || !serviceNumber) return;

    if (coins < 20) {
      alert('Not enough coins to make a call!');
      return;
    }

    coins -= 20;
    coinCounter.textContent = coins;

    alert(`Calling ${serviceName} at number ${serviceNumber}...`);
    



    // Add to Call History
    const callHistoryList = document.querySelector('#call-history .history-list');
    const timeNow = new Date().toLocaleTimeString();

    const newCall = document.createElement('div');

    newCall.classList.add('history-item');





    

 

    newCall.innerHTML = `
      <div class="history-card">
    <div class="history-info">
      <div class="service-name">${serviceName}</div>
      <div class="service-number">${serviceNumber}</div>
    </div>
    <div class="call-time">${timeNow}</div>
  </div>
    `;
    
    callHistoryList.appendChild(newCall);
  });

  
  // CLEAR HISTORY FUNCTIONALITY
  
  clearHistoryBtn.addEventListener('click', () => {
    const callHistoryList = document.querySelector('#call-history .history-list');
    callHistoryList.innerHTML = '';
  });


