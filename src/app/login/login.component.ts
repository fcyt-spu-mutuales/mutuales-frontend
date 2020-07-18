import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../shared/services/api.service';
import { routerTransition } from '../router.animations';
import { LoginRequest } from './models/login.request';
import { LoginResponse } from './models/login.response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  request: LoginRequest;
  showMessage: boolean;

  constructor(private translate: TranslateService, public router: Router, private apiService: ApiService) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('es');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    this.request = new LoginRequest();
    this.showMessage = false;
  }

  ngOnInit() {}

  async onLoggedin() {
    //const response: LoginResponse = await this.apiService.login(this.request);
    if (true){//response.success) {
      localStorage.setItem('isLoggedin', 'true');
      this.router.navigateByUrl('/dashboard');
    } else {
      this.request = new LoginRequest();
      this.showMessage = true;
    }
  }

  closeMessage() {
    this.showMessage = false;
  }
}
