function copyTextToClipboard() {
  const textArea = document.createElement("textarea");
  textArea.classList.add('hidden-textarea');
  textArea.value = getInnerHtml();
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      document.getElementById('copy-button').innerText = 'copied!';
      setTimeout(function() {
        document.getElementById('copy-button').innerText = 'copy code';
      }, 1500);
    }
  } catch (err) {
    console.log(err);
  }

  document.body.removeChild(textArea);
}

function getInnerHtml() {
  return '<a href="https://github.com" id="github-stamp"> \
      <svg \
        xmlns="http://www.w3.org/2000/svg" \
        viewBox="0 0 500 500" \
      > \
        <path id="body" \
              fill="none" stroke="black" stroke-width="1" \
              d="M 488.70,250.00 \
                 C 488.70,385.30 381.85,495.00 250.00,495.00 \
                   118.20,495.00 11.30,385.30 11.30,250.00 \
                   11.30,114.70 118.15,5.00 250.00,5.00 \
                   381.85,5.00 488.70,114.70 488.70,250.00 Z \
                 M 476.15,250.10 \
                 C 476.15,122.00 374.90,18.20 250.00,18.20 \
                   125.10,18.20 23.85,122.00 23.90,250.00 \
                   23.90,352.45 88.65,439.35 178.55,470.00 \
                   189.90,472.15 194.00,465.00 194.00,458.85 \
                   194.00,453.35 193.80,438.75 193.70,419.40 \
                   192.67,402.00 193.00,397.33 194.40,383.50 \
                   196.45,368.50 202.30,358.30 208.75,352.50 \
                   158.55,346.65 105.75,326.75 105.75,237.90 \
                   105.75,212.55 114.55,191.85 129.00,175.65 \
                   140.67,155.67 150.33,143.67 193.40,138.10 \
                   211.40,132.90 230.75,130.35 250.00,130.25 \
                   269.20,130.35 288.55,132.95 306.60,138.10 \
                   358.33,148.33 361.33,160.00 371.00,175.65 \
                   385.50,191.85 394.25,212.60 394.25,237.90 \
                   394.25,326.95 341.40,346.60 291.00,352.30 \
                   299.10,359.50 306.35,373.65 306.35,395.30 \
                   306.35,426.30 306.10,451.30 306.10,458.90 \
                   306.10,465.10 310.15,472.35 321.65,470.05 \
                   411.40,439.35 476.15,352.50 476.15,250.10 Z" /> \
        <path id="ear-right" \
              fill="none" stroke="black" stroke-width="1" \
              d="M 306.60,138.10 \
                 C 349.80,108.05 368.75,114.30 368.75,114.30 \
                   381.10,146.25 373.30,169.80 371.00,175.65 \
                   385.50,191.85 288.55,132.95 306.60,138.10 Z" /> \
        <path id="ear-left" \
              fill="none" stroke="black" stroke-width="1" \
              d="M 129.00,175.65 \
                 C 126.65,169.80 118.90,146.25 131.20,114.30 \
                   131.20,114.30 150.20,108.10 193.40,138.10 \
                   211.40,132.90 114.55,191.85 129.00,175.65 Z" /> \
        <path id="arm" \
              fill="none" stroke="black" stroke-width="1" \
              d="M 193.70,419.40 \
                 C 130.80,433.40 117.50,388.30 117.50,388.30 \
                   107.25,361.50 92.40,354.40 92.40,354.40 \
                   71.85,340.00 93.95,340.30 93.95,340.30 \
                   116.65,341.95 128.60,364.20 128.60,364.20 \
                   148.75,399.65 181.50,389.40 194.40,383.50 \
                   196.45,368.50 193.80,438.75 193.70,419.40 Z" /> \
      </svg> \
    </a> \
    <style> \
      @keyframes wave-arm { \
        0% { transform: rotate(0deg); } \
        30% { transform: rotate(-5deg) translateY(5%) translateX(-5%); } \
        50% { transform: rotate(0deg); } \
        70% { transform: rotate(-5deg) translateY(5%) translateX(-5%); } \
        100% { transform: rotate(0deg); } \
      } \
       @keyframes wave-ear-left { \
        0% { transform: rotate(0deg); } \
        50% { transform: rotate(-5deg) translateY(5%) translateX(-5%); } \
        100% { transform: rotate(0deg); } \
      } \
      @keyframes wave-ear-right { \
        0% { transform: rotate(0deg); } \
        50% { transform: rotate(5deg) translateY(-5%) translateX(4%); } \
        100% { transform: rotate(0deg); } \
      } \
      #github-stamp { \
        width: 70px; \
        height: 70px; \
        position: absolute; \
        top: 0px; \
        left: 0px; \
        border: 0px; \
      } \
      #github-stamp path { \
        fill: #000; \
      } \
      #github-stamp:hover #arm { \
        animation: wave-arm 0.5s infinite; \
      } \
      #github-stamp:hover #ear-left { \
        animation: wave-ear-left 0.5s infinite; \
      } \
      #github-stamp:hover #ear-right { \
        animation: wave-ear-right 0.5s infinite; \
      } \
      #github-stamp .circle-1 { \
        transform-origin: 50% 50%; \
        animation: wave-circle-1 0.9s infinite; \
      } \
      #github-stamp .circle-2 { \
        transform-origin: 50% 50%; \
        animation: wave-circle-2 0.9s infinite; \
      } \
    </style>';
}

(function renderStamp(){
  const stamp = document.getElementById('stamp');
  stamp.innerHTML = getInnerHtml();
})()