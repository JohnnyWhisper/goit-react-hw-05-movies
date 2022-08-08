import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  StyledForm,
  StyledSubmit,
  InputSearch,
  SubmitType,
} from './SearchForm.styled';

export const SearchForm = ({ onSearch }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ query }) => {
    if (query.trim() === '') {
      return toast('Please specify your query!', {
        autoClose: 3000,
      });
    }

    onSearch(query);
    reset();
  };

  return (
    <StyledForm>
      <StyledSubmit onSubmit={handleSubmit(onSubmit)}>
        <InputSearch
          {...register('query')}
          type="text"
          placeholder="Please search movie"
          autoComplete="off"
          autoFocus
        />
        <SubmitType type="submit">Search</SubmitType>
      </StyledSubmit>
    </StyledForm>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
