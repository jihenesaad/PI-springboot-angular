import { Component } from '@angular/core';

@Component({
  selector: 'app-mental-chatbot',
  templateUrl: './mental-chatbot.component.html',
  styleUrls: ['./mental-chatbot.component.css']
})
export class MentalChatbotComponent {
  ngOnInit() {
    (function(d, m){
        var kommunicateSettings = {"appId":"3e37aaa8a96680b15171f4cd0390ca2dd","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }

}
