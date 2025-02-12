import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {accountOptions} from "../models/document";
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements AfterViewInit{
  accountOption: any[] = accountOptions;
  currentTime: string = '';
  @ViewChild('textAnimation') textAnimation!: ElementRef;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){
    this.getCurrentTime();
  }

  getCurrentTime(){
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.toLocaleString('default', { month: 'short' });
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes:any = currentDate.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedDateTime = `${day}-${month}-${year}::${hours}:${minutes}${ampm}`;
    this.currentTime = formattedDateTime;
  }

  routeToLoginPage(){
    this.router.navigate(['/login'],{
      relativeTo: this.route,
      queryParams: {currentLoginTime: `${this.currentTime}`}
    })
  }

  handleSignup(param: any){
//  console.log('param>>>', param);
    this.router.navigate([param?.route], {
      relativeTo: this.route,
      queryParams: {
        stage: param?.param
      }
    })
    ///talent/talent-signup
  }

  animateText(){
    const textElement = this.textAnimation.nativeElement;
    const text = "Withholding Tax Receipt";
    let index = 0;
    const typingEffect = setInterval(() => {
      textElement.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(typingEffect);
      }
    }, 150); // Adjust the speed of typing here (in milliseconds)
  }

  ngAfterViewInit() {
    this.animateText();
  }

}
