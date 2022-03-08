it('Shows an autocomplete!', () => {
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData(){
            return [
                {Title: 'Avengers'},
                {Title: 'Not Avengers'},
                {Title: 'Definitely not Avengers'},
            ];
        },
        renderOption(movie) {
            return movie.Title;
        }
    });
    const dropdown = document.querySelector('.dropdown');
    
    expect(dropdown.className).not.to.include('is-active');
});

it('After searching, dropdown opens up', () => {
    const input = document.querySelector('input');
    input.value = 'avengers';
    input.dispatchEvent(new Event('input'));

    const dropdown = document.querySelector('.dropdown');

    expect(dropdown.className).to.include('is-active');
});