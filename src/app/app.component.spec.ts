import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';

import { NotificationModule } from '@carbon/icons-angular';
import { UserAvatarModule } from '@carbon/icons-angular';
import { AppSwitcherModule } from '@carbon/icons-angular';

describe('AppComponent', () => {
	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			imports: [
				BrowserModule,
				AppRoutingModule,
				UIShellModule,
				NotificationModule,
				UserAvatarModule,
				AppSwitcherModule,
			],
		});
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
