import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';

import { NotificationModule } from '@carbon/icons-angular';
import { UserAvatarModule } from '@carbon/icons-angular';
import { AppSwitcherModule } from '@carbon/icons-angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

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

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
