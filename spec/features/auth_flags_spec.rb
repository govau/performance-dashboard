require 'rails_helper'

RSpec.describe 'authentication feature toggles', type: :feature do
  after(:all) do
    $flipper[:two_factor].disable
  end

  context 'with auth flag on' do
    before do
      $flipper[:auth].enable
    end

    it 'should show login page' do
      visit new_user_session_path
      expect(page).to have_text 'Sign in'
    end

    describe 'two factor' do
      let(:user) { FactoryBot.create(:user_confirmed) }

      def use_sign_in_form
        visit new_user_session_path
        fill_in 'Email', with: user.email
        fill_in 'Password', with: 'password'
        click_button 'Sign in'
      end

      context 'with two-factor flag off' do
        before do
          $flipper[:two_factor].disable
        end

        it 'should log straight in' do
          use_sign_in_form
          expect(page).to have_current_path(editor_path, only_path: true)
        end
      end

      context 'with two-factor flag on' do
        before do
          $flipper[:two_factor].enable
        end

        it 'should demand two-factor set up' do
          use_sign_in_form
          expect(page).to have_text 'Google Authenticator'
        end
      end
    end
  end

  context 'with auth flag off' do
    before do
      $flipper[:auth].disable
    end

    it 'should deny access to login page' do
      visit new_user_session_path
      expect(page.status_code).to eq 403
    end
  end
end
