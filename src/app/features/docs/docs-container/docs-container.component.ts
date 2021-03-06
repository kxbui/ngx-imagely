import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-docs-container',
  templateUrl: './docs-container.component.html',
  styleUrls: ['./docs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsContainerComponent implements OnInit {
  @Input()
  data: { component?; html?; scss?; description? };
  constructor() {}

  ngOnInit(): void {}
}
