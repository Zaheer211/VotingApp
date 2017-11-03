import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixtu
    re = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createCompon async(() => {
Linter
Severity 	Provider 	Description	Line
Error	Typescript	Cannot find name 're'.	16:5
Error	Typescript	Cannot find name 'fixture'.	17:17
Error	Typescript	Property 'createCompon' does not exist on type 'typeof TestBed'.	22:29
Error	Typescript	',' expected.	22:42
Error	Typescript	'=' expected.	22:47
Error	Typescript	Cannot find name 'Apent'.	23:45
Error	Typescript	')' expected.	23:64

Error

	Typescript	',' expected.	26:5
Error	Typescript	')
' expected.	26:6

Git
GitHub (preview)
This repository does not have any remotes ho
Linter
Severity 	Provider 	Description	Line
Error	Typescript	Cannot find name 're'.	16:5
Error	Typescript	Cannot find name 'fixture'.	17:17
Error	Typescript	Property 'createCompon' does not exist on type 'typeof TestBed'.	22:29
Error	Typescript	',' expected.	22:42
Error	Typescript	'=' expected.	22:47
Error	Typescript	Cannot find name 'Apent'.	23:45
Error	Typescript	')' expected.	23:64
Error	Typescript	',' expected.	26:5
Error	Typescript	')' expected.	26:6
Git
GitHub (preview)
This repository does not have any remotes hosted at GitHub.com.sted at GitHub.com.
    const fixture = TestBed.createComponent(Apent(AppComponent);
    const ament.compppment.compment.comp = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));
});
