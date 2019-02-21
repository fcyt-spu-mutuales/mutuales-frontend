import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './api.service';
import { routerTransition } from '../router.animations';
import { LoginRequest } from './models/loginRequest';
import { LoginResponse } from './models/login.response';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  request: LoginRequest;
  constructor(private translate: TranslateService, public router: Router, private apiService: ApiService) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('es');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    this.request = new LoginRequest();
  }

  ngOnInit() {}

  async onLoggedin() {
    const response: LoginResponse = await this.apiService.login(this.request);
    if (response.success) {
      localStorage.setItem('isLoggedin', 'true');
      this.router.navigateByUrl('/dashboard');
    } else {
      console.log('Wrong Credentials!!!');
    }
  }
}
