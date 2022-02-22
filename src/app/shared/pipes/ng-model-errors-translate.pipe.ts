import { Pipe, PipeTransform } from '@angular/core';
import { NgModel, ValidationErrors } from '@angular/forms';
import { NGMODEL_ERRORS } from 'src/app/data/constants';

@Pipe({
  name: 'ngModelErrorsTranslate'
})
export class NgModelErrorsTranslatePipe implements PipeTransform {

  transform(field: ValidationErrors | null, email?: boolean): string {

    if (field) {
      if (field.required) {
        return NGMODEL_ERRORS.REQUIRED
      }
      if (field.min) {
        return NGMODEL_ERRORS.MIN + ": " + field.min.min
      }
      if (field.max) {
        return NGMODEL_ERRORS.MAX + ": " + field.max.max
      }
      if (field.email) {
        return NGMODEL_ERRORS.EMAIL
      }
      if (field.minlength) {
        return NGMODEL_ERRORS.MIN_LENGHT + ": " + field.minlength.requiredLength
      }
      if (field.maxlength) {
        return NGMODEL_ERRORS.MAX_LENGHT + ": " + field.maxlength.requiredLength
      }
      if (field.pattern) {
        if (email) {
          return NGMODEL_ERRORS.EMAIL
        } else {
          return NGMODEL_ERRORS.PATTERN
        }
      }
    }


    return ''
  }

}
