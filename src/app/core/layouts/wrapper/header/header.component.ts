import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Role } from '../../../../store/shared/enums/role.enum';
import { Store } from '@ngrx/store';
import { UpdateRole } from '../../../../store/user/user.action';
import { selectRole } from '../../../../store/user/user.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  roles = Role;
  public currentRole$: Observable<string>;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.currentRole$ = this.store.select(selectRole);
  }

  changeRole(role): void {
    this.store.dispatch(UpdateRole({role}));
  }

}
