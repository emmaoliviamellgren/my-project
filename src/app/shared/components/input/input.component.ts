import { NgClass, NgIf } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-input',
	imports: [NgClass],
	templateUrl: './input.component.html',
	styles: '',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputComponent),
			multi: true,
		},
	],
})
export class InputComponent implements ControlValueAccessor {
	value: string = '';
	@Input() placeholder: string = '';
	@Input() type: string = 'text';
	@Input() errorMessage: string = '';

	onChange = (value: string) => {};
	onTouched = () => {};

	writeValue(value: string): void {
		this.value = value;
	}

	registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	onInput(e: Event): void {
		const input = e.target as HTMLInputElement;
		this.value = input.value;
		this.onChange(this.value);
	}
}
